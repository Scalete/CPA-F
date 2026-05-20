# CPA Project

Лендинг CPA-сети по [техническому заданию](./docs/technical_specifications.md) и [макету Figma](https://www.figma.com/design/6ff9OEg7ShjtWtdPYyU9Re/CPA-F).

## Stack

| Технология                            | Назначение                                 |
| ------------------------------------- | ------------------------------------------ |
| **Next.js 15** (App Router)           | Роутинг, SSR, `app/` в корне проекта       |
| **TypeScript**                        | Типизация                                  |
| **Tailwind CSS**                      | Вёрстка, типографика, адаптив              |
| **SCSS modules**                      | Сложные keyframe-анимации (см. ниже)       |
| **GSAP + ScrollTrigger**              | Постраничный скролл и анимации на десктопе |
| **next-intl**                         | i18n: `/` — EN, `/ru` — RU                 |
| **axios**                             | HTTP-клиент к API                          |
| **react-hook-form**                   | Форма обратной связи                       |
| **ESLint + eslint-plugin-boundaries** | Правила FSD                                |

### Стили

- **Tailwind** — основная вёрстка и утилиты.
- **SCSS modules** (`*.module.scss`) — в первую очередь для **сложных CSS-анимаций** (бегущие строки, keyframes и т.п.). На старте один модуль у Hello World — пример подключения; в продакшене большинство layout-стилей остаётся в Tailwind.
- Шрифты: **Stolzl** (`font-sans`), **Halvar Breit** (`font-display`) — `app/layout.tsx`.

### Дизайн-система (из Figma)

Токены: `src/app/styles/globals.css` → `tailwind.config.ts`. Справочник: `src/shared/config/design-tokens.ts`.

## Getting started

```bash
npm install
npm run dev
```

- http://localhost:3000/ — English
- http://localhost:3000/ru — Russian

```bash
npm run build   # production build
npm run lint    # ESLint + FSD boundaries
```

## Environment variables

Создайте `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://cpa-server-vtel.onrender.com
NEXT_PUBLIC_API_KEY=prodcpakey333
```

Без файла используется дефолтный URL из `src/shared/config/api.ts`; ключ нужен для реальных запросов.

## Architecture (Feature-Sliced Design)

Импорты только **снизу вверх** и только через **Public API** (`index.ts` слайса):

`shared` → `entities` → `features` → `widgets` → `pages` → `app`

### Слои

| Слой         | Путь            | Роль                                                |
| ------------ | --------------- | --------------------------------------------------- |
| **app**      | `src/app/`      | Провайдеры, глобальные стили                        |
| **pages**    | `src/pages/`    | Композиция экрана из виджетов                       |
| **widgets**  | `src/widgets/`  | Крупные блоки (header, секции…)                     |
| **features** | `src/features/` | Действия пользователя (форма, переключатель языка…) |
| **entities** | `src/entities/` | Бизнес-сущности (benefit, …)                        |
| **shared**   | `src/shared/`   | API, UI-kit, иконки, assets, config, lib, types     |

Слои **pages, widgets, features, entities** делятся на сегменты:

- `ui` — компоненты
- `model` — состояние, типы
- `api` — запросы к бэкенду
- `lib` — хелперы слайса

`app` и `shared` — без обязательной нарезки на сегменты.

Фрагмент `shared` для медиа:

```
src/shared/
├── assets/          # пути к public/assets (paths.ts)
└── ui/
    └── icon/        # SVG → React (ui/*Icon.tsx, model/types.ts)
public/assets/
├── images/          # PNG, JPG, WebP
└── icons/           # растровые иконки
```

### Next.js + FSD

Два разных «pages»:

```
├── app/                 # Next.js App Router (URL → файлы)
│   └── [locale]/
│       └── page.tsx     # реэкспорт из FSD pages
├── pages/               # пустая папка Next.js (см. pages/README.md)
└── src/
    └── pages/           # FSD pages — композиция UI
        └── home/
```

`app/[locale]/page.tsx` только связывает маршрут с FSD-страницей:

```ts
export { HomePage as default } from '@pages/home'
```

Пустая корневая `pages/` нужна, чтобы Next.js **не** принимал `src/pages` за Pages Router ([документация FSD](https://feature-sliced.design/docs/guides/tech/with-nextjs)).

### Алиасы

`@app`, `@pages`, `@widgets`, `@features`, `@entities`, `@shared` — в `tsconfig.json` и `next.config.ts`.

### Ассеты и иконки

| Тип                      | Папка                    | Импорт                                    |
| ------------------------ | ------------------------ | ----------------------------------------- |
| Изображения PNG/JPG/WebP | `public/assets/images/`  | `next/image`, пути через `@shared/assets` |
| Растровые иконки         | `public/assets/icons/`   | `next/image` или `<img>`                  |
| SVG как React-компоненты | `src/shared/ui/icon/ui/` | `@shared/ui/icon`                         |

**SVG:** один файл = один компонент `*Icon.tsx`, общий тип `IconProps`. Пример — `ChevronDownIcon`. Новую иконку добавляете в `ui/`, экспортируете из `src/shared/ui/icon/index.ts`.

**Растровые файлы:** кладёте в `public/assets/…`, при необходимости регистрируете путь в `src/shared/assets/paths.ts` (`assetPaths.images.*`, `assetPaths.icons.*`).

Подробнее: `src/shared/assets/README.md`, `public/assets/images/README.md`, `public/assets/icons/README.md`.

### Готовые модули (shared)

| Импорт | Содержимое |
|--------|------------|
| `@shared/api` | `apiClient`, `createLocaleApiClient`, `apiFetch` |
| `@shared/types` | Общие TypeScript-типы: API responses, locales, loading states, common props |
| `@shared/assets` | `assetPaths` — типизированные URL статики |
| `@shared/ui/icon` | SVG-иконки (`ChevronDownIcon`, `IconProps`, …) |
| `@shared/lib/gsap` | `gsap`, `ScrollTrigger` |
| `@shared/lib/react-hook-form` | `useForm`, `FormProvider`, … |
| `@shared/config/i18n` | локали, `routing` |
| `@shared/config/api` | `API_URL`, `API_KEY` |
| `@shared/config/design-tokens` | палитра и градиенты (справочник)                 |

Переводы: `messages/en.json`, `messages/ru.json`. Роутинг локалей: `middleware.ts`, `src/shared/config/routing.ts` (`localePrefix: 'as-needed'` → `/` без префикса для EN).

## Fonts

Файлы в `public/fonts/`:

- Stolzl Light / Regular
- Halvar Breit Lt / Rg / Md / Bd

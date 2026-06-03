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

Скопируйте `.env.example` → `.env.local` и укажите ключ (значение из ТЗ / swagger):

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_API_URL=https://cpa-server-vtel.onrender.com
NEXT_PUBLIC_API_KEY=<ваш ключ>
```

- `.env.local` в `.gitignore` — в репозиторий не попадает.
- В `src/shared/config/api.ts` в git только публичный URL как fallback; **ключ только из env**.
- Префикс `NEXT_PUBLIC_` означает, что значение попадает в клиентский бандл Next.js и видно в браузере (Network / исходники). Для этого проекта API вызывается с клиента, поэтому «секрет» в классическом смысле недостижим — env нужен, чтобы не хранить ключ в исходниках и не коммитить его в git.

## Architecture (Feature-Sliced Design)

Импорты только **снизу вверх** и только через **Public API** (`index.ts` слайса):

`shared` → `entities` → `features` → `widgets` → `screens` → `app`

### Слои

| Слой         | Путь            | Роль                                                |
| ------------ | --------------- | --------------------------------------------------- |
| **app**      | `src/app/`      | Провайдеры, глобальные стили                        |
| **screens**  | `src/screens/`  | Композиция экрана из виджетов                       |
| **widgets**  | `src/widgets/`  | Крупные блоки (header, секции…)                     |
| **features** | `src/features/` | Действия пользователя (форма, переключатель языка…) |
| **entities** | `src/entities/` | Бизнес-сущности (benefit, …)                        |
| **shared**   | `src/shared/`   | API, UI-kit, иконки, assets, config, lib, types     |

Слои **screens, widgets, features, entities** делятся на сегменты:

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
public/
├── assets/
│   ├── images/      # PNG, JPG, WebP
│   └── icons/       # растровые иконки
└── icons/           # статические SVG (file.svg и т.д.)
```

### Next.js + FSD

Маршруты — в `app/`, композиция экрана — в `src/screens/` (имя **screens**, чтобы не конфликтовать с Pages Router и `app/**/page.tsx`):

```
├── app/
│   └── [locale]/
│       └── page.tsx     # реэкспорт из FSD screens
└── src/
    └── screens/
        └── home/
```

`app/[locale]/page.tsx` только связывает маршрут с экраном:

```ts
export { HomeScreen as default } from '@screens/home'
```

### Алиасы

`@app`, `@screens`, `@widgets`, `@features`, `@entities`, `@shared` — в `tsconfig.json` и `next.config.ts`.

### Ассеты и иконки

| Тип                      | Папка                    | Импорт                                    |
| ------------------------ | ------------------------ | ----------------------------------------- |
| Изображения PNG/JPG/WebP | `public/assets/images/`  | `next/image`, пути через `@shared/assets` |
| Растровые иконки         | `public/assets/icons/`   | `next/image` или `<img>`                  |
| Статические SVG          | `public/icons/`          | URL `/icons/…`, `assetPaths.icons`        |
| SVG как React-компоненты | `src/shared/ui/icon/ui/` | `@shared/ui/icon`                         |

**SVG:** один файл = один компонент `*Icon.tsx`, общий тип `IconProps`. Пример — `ChevronDownIcon`. Новую иконку добавляете в `ui/`, экспортируете из `src/shared/ui/icon/index.ts`.

**Растровые файлы:** кладёте в `public/assets/…`, при необходимости регистрируете путь в `src/shared/assets/paths.ts` (`assetPaths.images.*`, `assetPaths.icons.*`).

Подробнее: `src/shared/assets/README.md`, `public/assets/images/README.md`, `public/assets/icons/README.md`.

### Готовые модули (shared)

| Импорт | Содержимое |
|--------|------------|
| `@shared/api` | `apiClient`, `createLocaleApiClient`, `ApiError` |
| `@widgets/multi-benefits` | `getBenefits`, `BenefitsResponse` |
| `@widgets/multi-tasks` | `getTasks`, `TasksResponse` |
| `@widgets/multiply-with-us` | `getMultiply`, `MultiplyResponse` |
| `@features/contact-form` | `submitForm`, `FormPayload` |
| `@shared/types` | Общие TypeScript-типы: API responses, locales, loading states, common props |
| `@shared/assets` | `assetPaths` — типизированные URL статики |
| `@shared/ui/icon` | SVG-иконки (`ChevronDownIcon`, `IconProps`, …) |
| `@shared/ui/container` | Общий layout-контейнер для ограничения ширины контента и адаптивных боковых отступов |
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

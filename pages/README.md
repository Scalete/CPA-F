# Next.js `pages` (корень проекта)

Эта папка **пустая намеренно**.

Next.js без неё воспринимает `src/pages` как [Pages Router](https://nextjs.org/docs/pages) и ломает сборку с App Router.

Слой FSD **pages** (композиция экранов) лежит в `src/pages/` и подключается из `app/` через реэкспорт.

См. [FSD + Next.js](https://feature-sliced.design/docs/guides/tech/with-nextjs).

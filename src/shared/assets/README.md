# Assets (shared)

| Тип | Где лежат файлы | Где использовать в коде |
|-----|-----------------|-------------------------|
| Фото, иллюстрации | `public/assets/images/` | `next/image`, `assetPaths` из `@shared/assets` |
| Растровые иконки | `public/assets/icons/` | `next/image` или `<img>` |
| SVG-иконки | — | `src/shared/ui/icon/*.tsx` → `@shared/ui/icon` |

Шрифты остаются в `public/fonts/`.

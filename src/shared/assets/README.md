# Assets (shared)

| Тип | Где лежат файлы | Где использовать в коде |
|-----|-----------------|-------------------------|
| Фото, иллюстрации | `public/assets/images/` | `next/image`, `assetPaths` из `@shared/assets` |
| Растровые иконки | `public/assets/icons/` | `next/image` или `<img>` |
| Статические SVG | `public/icons/` | URL `/icons/…`, `assetPaths.icons` |
| SVG-иконки UI | — | `src/shared/ui/icon/*.tsx` → `@shared/ui/icon` |

Шрифты остаются в `public/fonts/`.

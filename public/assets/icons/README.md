# Растровые иконки (PNG, JPG, WebP)

Мелкие картинки, которые неудобно верстать как SVG-компонент (фото-иконки, сложные экспорты из Figma).

**Пример:** `telegram.png` → `/assets/icons/telegram.png`

```tsx
import Image from 'next/image'

<Image src="/assets/icons/telegram.png" alt="Telegram" width={24} height={24} />
```

Интерактивные векторные иконки — в `src/shared/ui/icon/` как `.tsx`.

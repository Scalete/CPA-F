# Изображения (PNG, JPG, WebP)

Статические файлы для `next/image` и фонов.

**Пример:** положите `hero.png` сюда → URL `/assets/images/hero.png`

В коде:

```tsx
import Image from 'next/image'
import { assetPaths } from '@shared/assets'

<Image src="/assets/images/hero.png" alt="" width={1200} height={800} />
// или после добавления в paths.ts:
// <Image src={assetPaths.images.hero} ... />
```

Не кладите сюда SVG-иконки — для них используйте `src/shared/ui/icon/`.

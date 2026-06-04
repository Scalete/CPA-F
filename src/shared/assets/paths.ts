/**
 * Пути к статике из `public/assets/`.
 * Добавляйте ключи по мере появления файлов в репозитории.
 */
export const assetPaths = {
  images: {
    snake: '/assets/images/snake.png',
    snake3: '/assets/images/snake-3.png',
    snake4: '/assets/images/snake-4.png',
    snakeWithDiamond: '/assets/images/snake-with-diamond.png',
  },
  icons: {
    file: '/icons/file.svg',
    window: '/icons/window.svg',
    // telegram: '/assets/icons/telegram.png',
  },
} as const

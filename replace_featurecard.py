from pathlib import Path
path = Path('src/components/ui/GameCard.tsx')
text = path.read_text(encoding='utf-8')
old = """    <div
      className={cn(
        'group relative',
        'rounded-2xl glass',
        'overflow-hidden',
        className
      )}
    >
      {/* ±≥æ∞π‚–ß */}
      <div
        className={cn(
          'absolute inset-0 opacity-30',
          variant === 'gold' && 'bg-gradient-to-br from-yellow-500/10 to-transparent',
          variant === 'dragon' && 'bg-gradient-to-br from-blue-500/10 to-transparent',
          variant === 'game' && 'bg-gradient-to-br from-pink-500/10 to-transparent',
          variant === 'default' && 'bg-gradient-to-br from-gray-500/10 to-transparent'
        )}
      />

      <div
        className={cn(
          'relative z-10 flex flex-col gap-6 p-6 md:p-8',
          reverse && 'md:flex-row-reverse md:text-right',
          !reverse && 'md:flex-row'
        )}
      >
        {/* Õº... etc

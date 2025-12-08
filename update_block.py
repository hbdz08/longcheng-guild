# -*- coding: utf-8 -*-
import pathlib
path = pathlib.Path('src/app/page.tsx')
text = path.read_text(encoding='utf-8')
old = "          <ul className=\"space-y-3\">\n            {features.map((feature, idx) => (\n              <li\n                key={idx}\n                className=\"flex items-start gap-3 text-gray-300 text-sm md:text-base\"\n              >\n                <span\n                  className={cn(\n                    'flex-shrink-0 text-lg leading-none text-brand-gray' \n                  )}\n                >\n                  ﾂｷ\n                </span>\n                <span>{feature}</span>\n              </li>\n            ))}\n          </ul>\n"
new = "          <div className=\"w-full h-px bg-white/5\" />\n\n          <ul className=\"space-y-3\">\n            {features.map((feature, idx) => (\n              <li\n                key={idx}\n                className=\"flex items-start gap-3 text-gray-300 text-sm md:text-base\"\n              >\n                <span\n                  className={cn(\n                    'flex-shrink-0 text-lg leading-none',\n                    variant === 'gold' && 'text-brand-gold',\n                    variant === 'dragon' && 'text-blue-400',\n                    variant === 'game' && 'text-pink-400',\n                    variant === 'default' && 'text-white/70'\n                  )}\n                >\n                  ·\n                </span>\n                <span>{feature}</span>\n              </li>\n            ))}\n          </ul>\n"
if old not in text:
    raise SystemExit('pattern not found')
path.write_text(text.replace(old, new, 1), encoding='utf-8')

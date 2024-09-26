import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'


export default {
  plugins: {
    'postcss-prefix-selector': {
      prefix: ":not(:where(.vp-raw, .vp-raw *))",
      includeFiles: [/vp-doc\.css/, /base\.css/],
      transform(prefix, _selector) {
        const [selector, pseudo = ''] = _selector.split(/(:\S*)$/);
        return selector + prefix + pseudo;
      },
    },
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}

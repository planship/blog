# planship-blog
The [Planship blog](https://blog.planship.io), powered by [VitePress](https://github.com/vuejs/vitepress)

## Run locally
```
pnpm run blog:dev
```

## Build for production and preview
```
pnpm run blog:build
pnpm run blog:preview
```

## Images
Articles are assumed to have *cover.jpg* and *preview.jpg* images in a folder of the format `articles/[blog post filename without .md extension]`. In local dev, this will assume `public/images` is the root directory for assets unless a .env is used.

* cover.jpg - A 1200x630 image that will be displayed at the top of the blog post and also used for open graph purposes
* preview.jpg - A square image (I.e. 256x256) that will be displayed next to the post's link on the blog index

## .env
An optional .env can be used to specify things like hostname and assets path. See `.env.example` for more details. When starting the dev server or building the .env file is copied from the project root to the `blog` folder. This is so environment variables are available in VitePress' site config as well as components and posts.

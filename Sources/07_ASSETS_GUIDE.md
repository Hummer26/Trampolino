# 07 — Assets Guide

## Source folder
The client/developer source folder is:

```txt
Trampolino/Source
```

This folder contains planning documents and supplied assets.

## Recommended public folder structure

When implementing the Next.js project, copy visual assets into:

```txt
public/
├─ images/
│  ├─ logo/
│  ├─ hero/
│  ├─ bungee/
│  ├─ inflatable/
│  └─ gallery/
└─ videos/
```

Recommended final paths:

```txt
public/images/logo/logo.jpg
public/videos/vid.mp4
```

## Supplied assets

### Logo

```txt
logo.jpg
```

Use in:

- header;
- footer;
- Open Graph fallback if no better OG image exists.

### Video

```txt
vid.mp4
```

Use as homepage hero background.

The video is not attached here, but it will exist in `Trampolino/Source`.

Recommended final path:

```txt
public/videos/vid.mp4
```

### Images

```txt
IMG_6334 2.jpg
IMG_6334.jpg
IMG_6343.jpg
IMG_6389.jpg
IMG_8932.jpg
IMG_9043.jpg
IMG_9213.jpg
IMG_2195.jpg
IMG_3347.jpg
IMG_3688-min.jpg
IMG_4137-min.jpg
IMG_5873-min.JPG
```

## Suggested image mapping

### Hero poster / atmosphere

Use one of:

```txt
IMG_6334.jpg
IMG_6334 2.jpg
IMG_5873-min.JPG
```

### Bungee trampoline service

Use one of:

```txt
IMG_8932.jpg
IMG_9043.jpg
IMG_9213.jpg
IMG_2195.jpg
IMG_3347.jpg
IMG_3688-min.jpg
IMG_4137-min.jpg
```

### Inflatable castles service

Use:

```txt
IMG_6343.jpg
IMG_6389.jpg
```

### Gallery

Use all images, optimized and arranged responsively.

## Image optimization

Before production deployment:

- compress images;
- use WebP/AVIF if possible;
- keep original files in a backup folder;
- use `next/image` for all non-background images;
- add meaningful alt text in each language or at least neutral descriptive alt text.

## Recommended alt texts

Italian:

```txt
Bungee trampoline all’aperto in Svizzera
Castello gonfiabile colorato per bambini
Bambina che salta con il bungee trampoline
Attrazione per bambini durante un evento sulla neve
Trampolini con elastici in un parco vicino al lago
```

English:

```txt
Outdoor bungee trampoline in Switzerland
Colorful inflatable castle for children
Child jumping on a bungee trampoline
Kids attraction during a winter event
Elastic trampolines in a lakeside park
```

## Important privacy note

Some photos include children. Before publishing, confirm that the client has the right/permission to use these photos on the website.

If permission is uncertain:

- avoid close-up identifiable faces;
- crop where needed;
- use wide shots;
- use photos where faces are not clearly visible.

## File naming recommendation

For production, rename files to descriptive names:

```txt
bungee-trampoline-lake-switzerland.jpg
bungee-trampoline-winter-event.jpg
inflatable-castle-children.jpg
inflatable-slide-outdoor.jpg
salto-trampolino-logo.jpg
```

Avoid spaces in final asset names.

## Open Graph image

Create a dedicated OG image later:

```txt
public/images/og/salto-trampolino-og.jpg
```

Recommended size:

```txt
1200 x 630 px
```

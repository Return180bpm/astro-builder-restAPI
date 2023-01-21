import rss from '@astrojs/rss';

export async function get() {
    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: 'https://astro-builder-restapi.netlify.app',
        items: import.meta.glob('./**/*.md'),
        customData: `<language>en-us</language>`,
    });
}
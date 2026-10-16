export function usePageSeo(options: { title: string; description: string }) {
  const { title, description } = options
  const url = useRequestURL()
  const canonical = `${url.origin}${url.pathname}`

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical,
    twitterTitle: title,
    twitterDescription: description,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonical }],
  })
}

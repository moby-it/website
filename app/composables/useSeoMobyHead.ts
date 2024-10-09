export function useSeoMobyHead(props: {
  title: string;
  description: string;
  image?: string;
}) {
  useSeoMeta({
    title: props.title,
    description: props.description,
    ogTitle: props.title,
    ogDescription: props.description,
    ogImage: props.image || "https://moby-it.com/ogImage.png",
    twitterCard: "summary_large_image",
  });
}

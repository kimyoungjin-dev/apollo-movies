export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const defaultImage = (
  poster,
  defaultPoster = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
) => {
  if (poster) {
    return poster;
  } else {
    return defaultPoster;
  }
};

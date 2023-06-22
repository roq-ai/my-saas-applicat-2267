const mapping: Record<string, string> = {
  comments: 'comment',
  organizations: 'organization',
  posts: 'post',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

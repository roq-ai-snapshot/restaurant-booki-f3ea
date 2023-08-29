const mapping: Record<string, string> = {
  chefs: 'chef',
  invitations: 'invitation',
  menus: 'menu',
  reservations: 'reservation',
  restaurants: 'restaurant',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

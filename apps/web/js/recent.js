const STORAGE_KEY = 'onius_recent';
const MAX_ITEMS = 8;

export function trackVisit(name, icon, slug, key) {
  let recent = getRecentTools();

  recent = recent.filter(function(item) { return item.slug !== slug; });

  recent.unshift({
    name: name,
    icon: icon,
    slug: slug,
    key: key,
    time: Date.now()
  });

  if (recent.length > MAX_ITEMS) {
    recent = recent.slice(0, MAX_ITEMS);
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  } catch (e) {}
}

export function getRecentTools() {
  try {
    var data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    var parsed = JSON.parse(data);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (e) {
    return [];
  }
}

export function clearRecent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {}
}

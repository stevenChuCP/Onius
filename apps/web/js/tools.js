export var toolRegistry = {
  base64:  { name: 'Base64 Converter', icon: 'b64-icon',    slug: '/base64.html',   category: 'Encoding & Decoding', accent: 'primary' },
  archiver:{ name: 'Archive Manager',  icon: 'inventory_2', slug: '/archiver.html', category: 'Archiving',           accent: 'tertiary' },
  sha256:  { name: 'SHA-256 Generator', icon: 'verified_user', category: 'Security', accent: 'error' },
  rsa:     { name: 'RSA Generator',     icon: 'verified_user', category: 'Security', accent: 'error' },
  pqc:     { name: 'PQC Algorithm',     icon: 'verified_user', category: 'Security', accent: 'error' },
  svg2png: { name: 'SVG → PNG',         icon: 'description', category: 'Files', accent: 'secondary' },
  pem2cer: { name: 'PEM → CER',         icon: 'description', category: 'Files', accent: 'secondary' },
  pem2crt: { name: 'PEM → CRT',         icon: 'description', category: 'Files', accent: 'secondary' },
};

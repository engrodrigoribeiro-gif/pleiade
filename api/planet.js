const ALLOWED_MOSAICS = new Set([
  'global_monthly_2023_07_mosaic',
  'global_monthly_2024_07_mosaic',
  'global_monthly_2025_07_mosaic',
  'global_monthly_2026_03_mosaic',
]);

export default async function handler(request, response) {
  const apiKey = process.env.PLANET_API_KEY;
  if (!apiKey) {
    return response.status(503).json({ error: 'Serviço Planet não configurado.' });
  }

  const { mosaic, z, x, y } = request.query;
  if (!ALLOWED_MOSAICS.has(mosaic) || !/^\d+$/.test(z) || !/^\d+$/.test(x) || !/^\d+$/.test(y)) {
    return response.status(400).json({ error: 'Parâmetros de tile inválidos.' });
  }

  const tileUrl = `https://tiles.planet.com/basemaps/v1/planet-tiles/${mosaic}/gmap/${z}/${x}/${y}.png?api_key=${encodeURIComponent(apiKey)}`;
  const tileResponse = await fetch(tileUrl);
  if (!tileResponse.ok) {
    return response.status(tileResponse.status).json({ error: 'Tile Planet indisponível.' });
  }

  const contentType = tileResponse.headers.get('content-type') || 'image/png';
  const buffer = Buffer.from(await tileResponse.arrayBuffer());
  response.setHeader('Content-Type', contentType);
  response.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400');
  return response.status(200).send(buffer);
}

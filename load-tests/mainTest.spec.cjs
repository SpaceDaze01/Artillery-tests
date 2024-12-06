module.exports = {mainTest};

async function mainTest(page) {
  await page.goto('http://localhost:4000/kategori/frukt-och-gront');
  await page.getByRole('link', { name: 'Kött, chark & fågel' }).click();
  await page.getByRole('link', { name: 'Fågel', exact: true }).click();
  await page.getByRole('link', { name: 'Mejeri, ost & ägg' }).click();
  await page.getByRole('button', { name: '>' }).click();
  await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('name-asc');
  await page.getByRole('link', { name: 'Skafferi' }).click();
  await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('topRated');
  await page.getByRole('link', { name: 'Bröd & Kakor' }).click();
  await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('name-desc');
  await page.getByRole('link', { name: 'Fryst', exact: true }).click();
  await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('price-asc');
  await page.getByRole('link', { name: 'Fisk & Skaldjur', exact: true }).click();
  await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('price-desc');
  await page.getByRole('link', { name: 'Vegetariskt' }).click();
  await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('compareprice-asc');
  await page.getByRole('link', { name: 'Glass, godis & snacks' }).click();
  await page.getByLabel('Sortera:PopulärastA – ÖÖ –').selectOption('compareprice-desc');
  await page.getByRole('link', { name: 'Dryck' }).click();
  await page.getByRole('link', { name: 'Färdigmat' }).click();
  await page.getByRole('link', { name: 'Barn' }).click();
  await page.getByRole('link', { name: 'Blommor & trädgård' }).click();
  await page.getByRole('link', { name: 'Hem & Städ' }).click();
  await page.getByRole('link', { name: 'Hälsa & Skönhet' }).click();
  await page.getByRole('link', { name: 'Apotek' }).click();
  await page.getByRole('link', { name: 'Djur', exact: true }).click();
  await page.getByRole('link', { name: 'Tobak' }).click();
  await page.getByRole('link', { name: 'Kiosk' }).click();
  await page.getByText('Sida: /').click();
  await page.getByRole('link', { name: 'Lotter' }).click();
  await page.getByText('Sortera:PopulärastA – ÖÖ –').click();
};
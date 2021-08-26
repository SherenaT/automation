import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await (await driver).get("http://127.0.0.1:8080/");
});

afterAll(async () => {
  await (await driver).quit();
});

test("add and delete movie", async () => {
  let searchBar = await driver.findElement(
    By.xpath("/html/body/main/section/form/input")
  );

  await searchBar.sendKeys("The Notebook\n");
  await searchBar.sendKeys("Star Wars\n");

  let deleteMovie = await driver.findElement(By.xpath("//*[@id='StarWars']"));
  await deleteMovie.click();

  await driver.sleep(3000);
});

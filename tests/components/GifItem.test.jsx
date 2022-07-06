//* libraries
import { render, screen } from "@testing-library/react";
//* components
import { GifItem } from "../../src/components/GifItem";

//? Tests
describe("Tests in <GifItem/>", () => {
  const title = "One Punch";
  const url =
    "https://media2.giphy.com/media/oxbNORcXx76F2/giphy.gif?cid=aa030f39gigshg8jcumtz662xsloyek0d7jblzpwqvqnxuhh&rid=giphy.gif&ct=g";

  test("should make match with the snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show img with the right url and alt", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    // expect(screen.getByRole("img").src).toBe(url);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test("should show title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});

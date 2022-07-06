//* libraries
import { render, screen } from "@testing-library/react";
//* components
import { GifGrid } from "../../src/components/GifGrid";
//* hooks
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

//? Tests
describe("Tests in <GifGrid/> component", () => {
  const category = "One Punch";

  test("should show the initial loading", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("should show items when the images are loaded from useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});

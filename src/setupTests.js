import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import "jest-dom/extend-expect";

Enzyme.configure({
    adapter: new Adapter()
});

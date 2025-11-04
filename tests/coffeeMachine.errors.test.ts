import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";

describe('CoffeeMachine errors', () => {
      it('throws too much sugar error if sugar is more than 5', () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Latte", 3.5, true, 6, "medium");
        const wrapper = () => machine.serve(drink, 2, false, 1);
        expect(wrapper).toThrow("Too much sugar");
      });
      it('throws Invalid price error if price is less than 0',()=>{
        const machine = new CoffeeMachine();
        const drink = new Drink("Latte", -5, true, 2, "medium");
        const wrapper = () => machine.serve(drink, 2, false, 1);
        expect(wrapper).toThrow("Invalid price");
      })
    it('throws Not enough money error if inserted money is less than price',()=>{
        const machine = new CoffeeMachine();
        const drink = new Drink("Latte", 3.5, true, 2, "medium");
        const wrapper = () => machine.serve(drink, 3, false, 1);
        expect(wrapper).toThrow("Not enough money");
      })
});

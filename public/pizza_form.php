<?php
    var_dump($_GET);
    var_dump($_POST);
?>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="/css/pizza_form.css">
        <title>Pizza Form</title>
    </head>
    <body>
        <div id="header">
            <h1 style="text-align:center; text-decoration:underline;" id="main_heading"><em><strong>Order Your Delicious<strong><em></h1>
        </div>
        <hr>
        <form>
            <div id="main">
                <label for="quantity">Quantity:</label>
                <select id="quantity" name="quantity">
                <?php for($number = 0; $number <= 99; $number++) {
                    echo "<option>" . $number . "</option>";
                }?>
                </select>
                <hr>
                <label for="crust">Crust Style:</label>
                <select id="crust" name="crust">
                    <option>Thin Crust</option>
                    <option>Flatbread Crust</option>
                    <option>Thick Crust</option>
                    <option>Depp Dish</option>
                    <option>New York-Style</option>
                    <option>Sicilian</option>
                    <option>Gourmet</option>
                </select>
                <hr>
                <div>
                    <label for="size">Size of Pizza:</label>
                </div>
                <hr>
                <div>
                    <img src="img/10in_pizza.jpg" alt="10in Pizza">
                    <label for="10in_pizza">10in Pizza
                    <input type="radio" id="pizza10" name="pizza_size">
                    </label>
                </div>
                <div>
                    <img id="pizza12" src="img/12in_pizza.jpg" alt="12in Pizza">
                    <label for="12in_pizza">12in Pizza</label>
                    <input type="radio" id="pizza10" name="pizza_size">
                </div>
                <div>
                    <img id="pizza14" src="img/14in_pizza.jpg" alt="14in Pizza">
                    <label for="14in_pizza">14in Pizza</label>
                    <input type="radio" id="pizza10" name="pizza_size">
                </div>
                <div>
                    <img id="pizza16" src="img/16in_pizza.jpg" alt="16in Pizza">
                    <label for="16in_pizza">16in Pizza</label>
                    <input type="radio" id="pizza10" name="pizza_size">
                </div>
                <hr>
                <div>
                    <label for="toppings" id="tops">What Toppings Would You Like on your Pizza?</label>
                </div>
                <hr>
                <div>
                    <img src="img/ancho_pizza.jpg" alt="Anchovies Pizza" id=pizza_top>
                    <label for="ancho_pizza">Anchovies
                    <input type="checkbox" id="ancho_pizza" name="pizza_topping">
                    </label>
                </div>
                <hr>
                <div>
                    <img src="img/bacon_pizza.jpg" alt="Bacon Pizza" id=pizza_top>
                    <label for="bacon_pizza">Bacon
                    <input type="checkbox" id="bacon_pizza" name="pizza_topping">
                    </label>
                </div>
                <hr>
                <div>
                    <img src="img/extra_cheese_pizza.jpg" alt="Extra Cheese Pizza" id=pizza_top>
                    <label for="cheese_pizza">Extra Cheese
                    <input type="checkbox" id="cheese_pizza" name="pizza_topping">
                    </label>
                </div>
                <hr>
                <div>
                    <img src="img/ham_pizza.jpg" alt="Ham Pizza" id=pizza_top>
                    <label for="ham_pizza">Ham
                    <input type="checkbox" id="ham_pizza" name="pizza_topping">
                    </label>
                </div>
                <hr>
                <div>
                    <img src="img/mushrooms_pizza.jpg" alt="Mushroom Pizza" id=pizza_top>
                    <label for="mushroom_pizza">Mushroom
                    <input type="checkbox" id="mushroom_pizza" name="pizza_topping">
                    </label>
                </div>
                <hr>
                <div>
                    <img src="img/pepperoni_pizza.jpg" alt="Pepperoni Pizza" id=pizza_top>
                    <label for="bacon_pizza">Pepperoni
                    <input type="checkbox" id="pepperoni_pizza" name="pizza_topping">
                    </label>
                </div>
                <hr>
                <div>
                    <img src="img/peppers_pizza.jpg" alt="Peppers Pizza" id=pizza_top>
                    <label for="peppers_pizza">Green Peppers
                    <input type="checkbox" id="peppers_pizza" name="pizza_topping">
                    </label>
                </div>
                <hr>
                <div>
                    <img src="img/pineapple_pizza.jpeg" alt="Pineapple Pizza" id=pizza_top>
                    <label for="pineapple_pizza">Pineapple
                    <input type="checkbox" id="pineapple_pizza" name="pizza_topping">
                    </label>
                </div>
                <hr>
                <h1>Delivery Info</h1>
                <hr>
                <label for="info_name">Name of Order-e:</label>
                <input type="text" id="info_name" name="info_name" placeholder="Enter Your Name">
                <br>
                <label for="info_phone">Phone Number of Order-e:</label>
                <input type="text" id="info_phone" name="info_phone" placeholder="Enter Your Phone Number">
                <br>
                <label for="info_address">Address You Want Pizza to be Delivered to:</label>
                <input type="text" id="info_address" name="info_address" placeholder="Enter Address">
                <br>
                <label for="info_payment">Payment Method</label>
                <input type="text" id="info_payment" name="info_payment" placeholder="Card Number">
                <br>
                <label for="info_insructions">Any Additional Instructions?</label>
                <br>
                <textarea id="info_instruction" name="info_instructions" rows="10" cols="35">
                </textarea>
                <br>
                <button>Submit Order</button>
                <hr>
            </div>
        </form>
    </body>
</html>
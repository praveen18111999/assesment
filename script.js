   function selectOption(pair, price, element) {
            document.querySelectorAll('.option').forEach(el => {
                el.classList.remove('active');
                el.querySelector('.size-colour').style.display = 'none';
            });

            element.classList.add('active');
            element.querySelector('.size-colour').style.display = 'block';
            document.querySelector('.total').textContent = "Total: DKK " + price + ".00";
        }
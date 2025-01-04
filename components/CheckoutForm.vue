<script setup>

const cart = useCartStore()

async function handleSubmit() {
    cart.formSubmitted = true
    await navigateTo('thank-you')
}

</script>

<template>

    <form @submit.prevent="handleSubmit">

        <div class="form-col">
            <label for="city">Choose a city</label>
            <select name="city" required>
                <option> Chisinau</option>
                <option> Balti</option>
                <option> Tiraspol</option>
            </select>
        </div>

        <div class="form-row">
            <div class="form-col">
                <label for="first-name">First name</label>
                <input type="text" name="first-name" placeholder="John Doe" required>
            </div>

            <div class="form-col">
                <label for="last-name">Last name</label>
                <input type="text" name="last-name" placeholder="Doe" required>
            </div>
        </div>

        <div class="form-row">
            <div class="form-col">
                <label for="street">Street name</label>
                <input type="text" name="street" placeholder="Baker Street" required>
            </div>

            <div class="form-col">
                <label for="house-number">House number</label>
                <input type="text" name="house-number" placeholder="22B" required>
            </div>
        </div>

        <div class="form-col">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="john@gmail.com" required>
        </div>

        <div class="form-col">
            <label for="phone-number">Phone number</label>
            <input type="tel" name="phone-number" placeholder="+373 000 000" required>
        </div>

        <div class="form-col">
            <label for="comment">Type a comment (optional) </label>
            <textarea name="comment" placeholder="Type anything" maxlength="120"></textarea>
        </div>

        <div style="margin-block: 2rem;" class="form-col form-summary">
            <hr>
            <b style="margin-block: 2rem;"> Total cost: $ {{ cart.totalCost }}</b>
            <button type="submit">Order now</button>
        </div>

    </form>
</template>


<style scoped>
button {
    border-radius: var(--rounded);
    background-color: var(--yellow);
    padding: 0.8rem 1.2rem;
    font-weight: 600;

    &:hover {
        background-color: var(--yellow__darkened);
        scale: 1.05;
    }
}

form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    background-color: var(--grey);
    color: var(--black);
    max-width: 30rem;
    width: 100%;
    padding: 2rem;
    z-index: 3;
    margin: auto;
}

.form-row {
    display: flex;
    gap: 1rem;
}

.form-col {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.6rem;
}

input,
textarea,
select {
    background-color: white;
    border-radius: 0.2rem;
    width: 100%;
    min-height: 2rem;
    padding-left: 0.4rem;


    &::placeholder {
        color: var(--grey__darkened);
        font-size: 0.8rem;
        padding-left: 0.4rem;
    }

    &:focus {
        outline: 1px solid var(--yellow__darkened);
        transition: 0.1s ease-in-out;
    }
}

textarea {
    resize: vertical;
    min-height: 4rem;
    padding-top: 0.6rem;

    &::placeholder {
        padding-top: 0.6rem;
    }
}

label {
    font-weight: 600;
}
</style>

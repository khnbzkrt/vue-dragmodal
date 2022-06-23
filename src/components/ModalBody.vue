<template>
  <div class="modal-container">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsum optio
      voluptates, assumenda sit adipisci distinctio ut esse minus earum, iusto
      eaque nam possimus veritatis sapiente provident, odio laudantium modi.
    </p>
    <div class="input-container">
      <div class="input-group">
        <label for="email">E-mail</label>
        <input
          type="text"
          placeholder="example@example.com"
          class="input"
          id="email"
        />
      </div>
      <div class="input-group">
        <label for="email">E-mail</label>
        <input
          type="text"
          placeholder="example@example.com"
          class="input"
          id="email"
        />
      </div>
    </div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsum optio
      voluptates, assumenda sit adipisci distinctio ut esse minus earum, iusto
      eaque nam possimus veritatis sapiente provident, odio laudantium modi.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.modal-container {
  font-size: 12px;
}

.input-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 20px 0px;
  gap: 20px;
}
.input-container .input-group {
  display: flex;
  flex-direction: column;
}

.input-container .input-group label {
  margin-bottom: 5px;
}

.input-container .input-group .input {
  outline: none;
  border: 1px solid #ddd;
  padding: 10px;
  height: 40px;
  font-size: 12px;
}
</style>
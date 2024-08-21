<!-- <template>
    <div class="container">
    <main>
        <h1>Contact Us</h1>
        <form>
            Name:<input type="text" name="name" placeholder="Enter name" required/>
            Email:<input type="email" name="email" placeholder="Enter email" required/>
            Message: <textarea placeholder="Enter message" name="message" required></textarea>
            <button type="submit">Send</button>
     </form>
    </main>
</div>
</template>

<style></style> -->

<template>
    <div class="contact-form">
      <h1 class="form-title">Contact Us</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name" class="form-label">Name:</label>
          <input v-model="form.name" type="text" id="name" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email:</label>
          <input v-model="form.email" type="email" id="email" class="form-input" required>
        </div>
        <div class="form-group">
          <label for="message" class="form-label">Message:</label>
          <textarea v-model="form.message" id="message" class="form-textarea" required></textarea>
        </div>
        <button type="submit" class="form-button">Send</button>
        <p v-if="status.message" :class="['form-status', status.type]">{{ status.message }}</p>
      </form>
    </div>
  </template>  
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        },
        status: {
          message: '',
          type: ''
        }
      }
    },
    methods: {
      handleSubmit() {
        // Save form data to localStorage
        localStorage.setItem('contactFormData', JSON.stringify(this.form));
  
        // Provide feedback to the user
        this.status.message = 'Your message has been saved locally!';
        this.status.type = 'success';
  
        // Clear the form
        this.form = { name: '', email: '', message: '' };
      }
    }
  }
  </script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-input:focus,
.form-textarea:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}

.form-textarea {
  min-height: 100px;
  resize: vertical;
}

.form-button {
  width: 100%;
  padding: 10px 0;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;
}

.form-button:hover {
  background: #0056b3;
}

.form-status {
  margin-top: 15px;
  text-align: center;
}

.form-status.success {
  color: #28a745;
}

.form-status.error {
  color: #dc3545;
}
</style>

  
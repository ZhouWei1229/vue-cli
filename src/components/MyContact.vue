<template>
  <div class="contact-page">
    <div class="page-content">
      <h1 class="title">Contact Us</h1>
      <p class="subtitle">If you have any questions or inquiries, feel free to get in touch with us.</p>
      <div class="contact-details">
        <p><strong>Address:</strong> 123 Main Street, City</p>
        <p><strong>Phone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> info@example.com</p>
      </div>
      <div class="contact-form">
        <h2 class="form-title">Send Us a Message</h2>
        <el-form ref="contactForm" :model="formData" class="form-container">
          <el-form-item label="Your Name" prop="name">
            <el-input v-model="formData.name" placeholder="Your Name" />
          </el-form-item>
          <el-form-item label="Your Email" prop="email">
            <el-input v-model="formData.email" placeholder="Your Email" />
          </el-form-item>
          <el-form-item label="Subject" prop="subject">
            <el-input v-model="formData.subject" placeholder="Subject" />
          </el-form-item>
          <el-form-item label="Your Message" prop="message">
            <el-input type="textarea" v-model="formData.message" placeholder="Your Message" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">Send</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus';

export default {
  components: {
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.contactForm.validate(valid => {
        if (valid) {
          // Perform form submission logic here
        }
      });
    },
  },
};
</script>

<style scoped>
.contact-page {
  background-color: #f9f9f9;
  color: #333;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
}

.title {
  font-size: 36px;
  margin-bottom: 1rem;
  color: #e76f51;
}

.subtitle {
  font-size: 18px;
  margin-bottom: 1.5rem;
  color: #555;
}

.contact-details {
  margin-bottom: 2rem;
}

.contact-details p {
  font-size: 16px;
}

.contact-form {
  text-align: center;
}

.form-title {
  font-size: 24px;
  margin-bottom: 1rem;
  color: #e76f51;
}

.form-container {
  max-width: 400px;
  margin: 0 auto;
}

.el-form-item__content {
  margin-top: 5px;
}

.el-button {
  background-color: #ffcc66;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.el-button:hover {
  background-color: #d46e26;
}
</style>

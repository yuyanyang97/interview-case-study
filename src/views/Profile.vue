    <template>
        <div class="bg-gray-100 h-screen flex items-center justify-center">
            <div class="bg-white p-8 rounded shadow-md w-96">
                <h2 class="text-2xl font-semibold mb-4">Edit Profile</h2>

                <!-- Profile Edit Form -->
                <form @submit.prevent="saveChanges">
                    <!-- Name Input -->
                    <div class="mb-4">
                    <label for="name" class="block text-gray-700 font-medium">Name</label>
                    <input v-model="user.name" type="text" id="name" name="name" class="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500">
                    </div>

                    <!-- Email Input -->
                    <div class="mb-4">
                    <label for="email" class="block text-gray-700 font-medium">Email</label>
                    <input v-model="user.email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded focus:outline-none focus:border-blue-500">
                    </div>

                    <!-- Submit Button -->
                    <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    </template>

    <script>


    export default {
        
    };
    </script>
  
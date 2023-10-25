/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans'],
        'dm-serif-display': ['DM Serif Display', 'serif'],
        'acme': ['Acme', 'sans'],
      }
    },
    backgroundImage: {
      'example': "url('../images/gradient.svg')",
      'user': "url('../images/user.svg')",
      'userMale': "url('../images/boy.svg')",
      'userFemale': "url('../images/girl.svg')",
      'lock': "url('../images/lock.svg')",

    }
  },
  plugins: [],
}


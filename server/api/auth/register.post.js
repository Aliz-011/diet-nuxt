import CryptoJS from 'crypto-js';
import User from '~/server/models/User';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, username, password } = body;

  const emailExist = await User.findOne({ email });
  const usernameExist = await User.findOne({ username });

  if (emailExist) {
    return 'email already exist';
  } else if (usernameExist) {
    return 'username already exist';
  }

  const hash = CryptoJS.AES.encrypt(password, 'secretkey').toString();
  try {
    const user = await User.create({ email, username, hash });

    if (!user) {
      return 'oops! error occured';
    }
    useRouter().push('/');
    return { user };
  } catch (error) {
    console.log(error.message);
  }
});

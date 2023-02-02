import { registerAs } from '@nestjs/config';

export default registerAs('alios', () => ({
    endpoint: process.env.ALIOS_END_POINT,
    accesskeyid: process.env.ALIOS_ACCESS_KEY_ID,
    accesskeyecret: process.env.ALIOS_ACCESS_KEY_SECRET,
    bucketname: process.env.ALIOS_BUCKET_NAME,
}));
import { config } from "dotenv";
config();
function required(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing env variable: ${key}`);
    }
    return value;
}
export const ENV = {
    JWT_SECRET: required("JWT_SECRET"),
};
//# sourceMappingURL=env.js.map
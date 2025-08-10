"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: Number(process.env.PORT || 4000),
    databaseUrl: process.env.DATABASE_URL || '',
    redisUrl: process.env.REDIS_URL || '',
};
//# sourceMappingURL=env.js.map
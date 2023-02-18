import mongoose from "mongoose";

const KeySchema = new mongoose.Schema({
    public_key: {
        type: String,
        required: true
    },
    secret_key: {
        type: String,
        required: true
    },
    permissions: {
        machines: {
            permission: {
                type: String,
                enum: ['none', 'create', 'read', 'edit', 'delete'],
                default: 'none'
            },
            machine_ids: [{
                id: mongoose.ObjectId,
                permission: {
                    type: String,
                    enum: ['none', 'create', 'read', 'edit', 'delete'],
                    default: 'none'
                }
            }]
        },
        users: {
            permission: {
                type: String,
                enum: ['none', 'create', 'read', 'edit', 'delete'],
                default: 'none'
            },
            user_ids: [{
                id: mongoose.ObjectId,
                permission: {
                    type: String,
                    enum: ['none', 'create', 'read', 'edit', 'delete'],
                    default: 'none'
                }
            }]
        },
        logs: {
            permission: {
                type: String,
                enum: ['none', 'create', 'read', 'edit', 'delete'],
                default: 'none'
            },
            log_ids: [{
                id: mongoose.ObjectId,
                permission: {
                    type: String,
                    enum: ['none', 'create', 'read', 'edit', 'delete'],
                    default: 'none'
                }
            }]
        }
    }
});

module.exports = mongoose.models.Key || mongoose.model("Key", KeySchema);

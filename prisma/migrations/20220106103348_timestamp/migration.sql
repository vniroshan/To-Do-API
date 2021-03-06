-- AlterTable
ALTER TABLE "notes" ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "delete_at" DROP NOT NULL,
ALTER COLUMN "delete_at" SET DATA TYPE TIMESTAMPTZ(6);

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "mobile_verified_at" DROP NOT NULL,
ALTER COLUMN "mobile_verified_at" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "delete_at" DROP NOT NULL,
ALTER COLUMN "delete_at" SET DATA TYPE TIMESTAMPTZ(6);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Music" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bannerUrl" TEXT NOT NULL,
    "song" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Music'
);
INSERT INTO "new_Music" ("bannerUrl", "id", "song") SELECT "bannerUrl", "id", "song" FROM "Music";
DROP TABLE "Music";
ALTER TABLE "new_Music" RENAME TO "Music";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `nip` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `jenisKelamin` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` DATETIME(3) NOT NULL,
    `telepon` VARCHAR(191) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuratMasuk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `noSurat` VARCHAR(191) NOT NULL,
    `perihal` VARCHAR(191) NOT NULL,
    `tglSurat` DATETIME(3) NOT NULL,
    `tglDiterima` DATETIME(3) NOT NULL,
    `pengirim` VARCHAR(191) NOT NULL,
    `lampiran` VARCHAR(191) NOT NULL,
    `noAgenda` VARCHAR(191) NULL,
    `klasifikasi` VARCHAR(191) NULL,
    `perihalSurat` VARCHAR(191) NULL,
    `sifatSurat` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `uploadedBy` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuratMasuk_noSurat_key`(`noSurat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suratKeluar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tglSurat` DATETIME(3) NOT NULL,
    `noSurat` VARCHAR(191) NOT NULL,
    `perihal` VARCHAR(191) NOT NULL,
    `tujuan` VARCHAR(191) NOT NULL,
    `lampiran` VARCHAR(191) NOT NULL,
    `kepada` VARCHAR(191) NOT NULL,
    `tglKirim` DATETIME(3) NOT NULL,
    `noAgenda` VARCHAR(191) NULL,
    `klasifikasi` VARCHAR(191) NULL,
    `sifatSurat` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `tembusan` VARCHAR(191) NOT NULL,
    `uploadedBy` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `suratKeluar_noSurat_key`(`noSurat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SuratMasuk` ADD CONSTRAINT `SuratMasuk_uploadedBy_fkey` FOREIGN KEY (`uploadedBy`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `suratKeluar` ADD CONSTRAINT `suratKeluar_uploadedBy_fkey` FOREIGN KEY (`uploadedBy`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

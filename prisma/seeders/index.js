import { PrismaClient } from '@prisma/client'
import { seedUsers } from './userSeeder.js'

const prisma = new PrismaClient()

async function main() {
  const { user1 } = await seedUsers()

  await prisma.suratMasuk.create({
    data: {
      noSurat: "001/SM/2025",
      perihal: "Permohonan Izin Cuti",
      tglSurat: new Date("2025-04-01"),
      tglDiterima: new Date("2025-04-02"),
      pengirim: "Dinas Pendidikan",
      lampiran: "surat_cuti.pdf",
      noAgenda: "A-001",
      klasifikasi: "Cuti",
      perihalSurat: "Izin Cuti Tahunan",
      sifatSurat: "Biasa",
      status: "Masuk",
      uploadedBy: user1.id,
    },
  })

  await prisma.suratKeluar.create({
    data: {
      tglSurat: new Date("2025-04-03"),
      noSurat: "001/SK/2025",
      perihal: "Balasan Permohonan",
      tujuan: "Dinas Pendidikan",
      lampiran: "balasan.pdf",
      kepada: "Kepala Dinas Pendidikan",
      tglKirim: new Date("2025-04-04"),
      noAgenda: "K-001",
      klasifikasi: "Balasan",
      sifatSurat: "Penting",
      status: "Terkirim",
      tembusan: "Sekretaris",
      uploadedBy: user1.id,
    },
  })

  console.log("✅ Seeder berhasil dijalankan.")
}

main()
  .finally(() => prisma.$disconnect())
  .catch((e) => {
    console.error("❌ Seeder gagal:", e)
    process.exit(1)
  })

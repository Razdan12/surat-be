import { PrismaClient } from '@prisma/client'
import { hash } from '../../src/helpers/bcrypt.helper.js'

const prisma = new PrismaClient()

export async function seedUsers() {
  console.log('🔁 Seeding Users...')
  const user1 = await prisma.user.create({
    data: {
      name: "Ahmad Fauzi",
      email: "fauzi@example.com",
      password: await hash('password123'),
      nip: "19870321 200112 1 001",
      role: "admin",
      jenisKelamin: "Laki-laki",
      jabatan: "Kepala Seksi",
      tempatLahir: "Bandung",
      tanggalLahir: new Date("1987-03-21"),
      telepon: "081234567890",
      status: true,
      alamat: "Jl. Merdeka No. 10",
    },
  })

  return { user1 }
}

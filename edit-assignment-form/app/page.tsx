"use client"

import { EditAssignmentDialog } from "@/components/edit-assignment-dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Calendar, FileEdit } from "lucide-react"

export default function Home() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-8 flex items-center justify-center">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg mb-4">
            <Calendar className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-balance">Sistema de Asignaciones</h1>
          <p className="text-lg text-muted-foreground text-balance max-w-md mx-auto">
            Gestiona tus citas médicas de manera eficiente y profesional
          </p>
        </div>

        <Button onClick={() => setIsOpen(true)} size="lg" className="shadow-lg h-12 px-8 text-base">
          <FileEdit className="w-5 h-5 mr-2" />
          Abrir Editor de Asignación
        </Button>
      </div>

      <EditAssignmentDialog open={isOpen} onOpenChange={setIsOpen} />
    </div>
  )
}

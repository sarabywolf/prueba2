"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MapPin, Calendar, Clock, Globe, Briefcase, User, MessageSquare, CalendarDays, Save, X } from "lucide-react"

interface EditAssignmentDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function EditAssignmentDialog({ open, onOpenChange }: EditAssignmentDialogProps) {
  const [comment, setComment] = useState("")
  const [formData, setFormData] = useState({
    address: "4208 SIX FORKS RD. SUITE 1000",
    city: "RALEIGH CITY",
    state: "NC",
    zip: "27609",
    date: "2025-12-24",
    time: "07:30",
    endTime: "09:30",
    timezone: "",
    type: "Medical",
    lep: "MANUEL GARCIA",
    intakeDate: "",
    intakeTime: "",
  })
  const [isSaving, setIsSaving] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate save operation
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSaving(false)
    onOpenChange(false)
  }

  const handleAddComment = () => {
    if (comment.trim()) {
      console.log("[v0] Adding comment:", comment)
      setComment("")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-8 pt-8 pb-6 border-b bg-gradient-to-r from-primary/5 via-primary/3 to-transparent">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-3xl font-bold tracking-tight">Editar Asignación</DialogTitle>
              <p className="text-sm text-muted-foreground">Actualiza los detalles de la cita médica</p>
            </div>
            <Badge variant="secondary" className="gap-1.5 px-3 py-1.5">
              <User className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">En Edición</span>
            </Badge>
          </div>
        </DialogHeader>

        <div className="grid md:grid-cols-[1fr_400px] gap-0 h-[calc(90vh-180px)]">
          {/* Main Form Section */}
          <ScrollArea className="px-8 py-6">
            <div className="space-y-8 pb-6">
              {/* Location Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Ubicación</h3>
                    <p className="text-xs text-muted-foreground">Información del lugar de la cita</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address" className="text-sm font-medium">
                      Dirección
                    </Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Ingrese la dirección completa"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm font-medium">
                      Ciudad
                    </Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Ciudad"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-sm font-medium">
                      Estado <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.state}
                      onValueChange={(value) => setFormData({ ...formData, state: value })}
                    >
                      <SelectTrigger id="state" className="h-11 transition-all focus:ring-2 focus:ring-primary/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NC">Carolina del Norte (NC)</SelectItem>
                        <SelectItem value="CA">California (CA)</SelectItem>
                        <SelectItem value="TX">Texas (TX)</SelectItem>
                        <SelectItem value="FL">Florida (FL)</SelectItem>
                        <SelectItem value="NY">Nueva York (NY)</SelectItem>
                        <SelectItem value="IL">Illinois (IL)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zip" className="text-sm font-medium">
                      Código Postal
                    </Label>
                    <Input
                      id="zip"
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="00000"
                      maxLength={5}
                    />
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Appointment Section */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-2/20 to-chart-2/10 flex items-center justify-center shadow-sm">
                    <Calendar className="w-5 h-5 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Detalles de la Cita</h3>
                    <p className="text-xs text-muted-foreground">Programación y horarios</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2 text-sm font-medium">
                      <CalendarDays className="w-4 h-4 text-muted-foreground" />
                      Fecha de Cita <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2 text-sm font-medium">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      Hora de Inicio
                    </Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endTime" className="flex items-center gap-2 text-sm font-medium">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      Hora de Finalización
                    </Label>
                    <Input
                      id="endTime"
                      type="time"
                      value={formData.endTime}
                      onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                      className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone" className="flex items-center gap-2 text-sm font-medium">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      Zona Horaria <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.timezone}
                      onValueChange={(value) => setFormData({ ...formData, timezone: value })}
                    >
                      <SelectTrigger id="timezone" className="h-11 transition-all focus:ring-2 focus:ring-primary/20">
                        <SelectValue placeholder="Seleccionar zona horaria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="est">Eastern (EST/EDT)</SelectItem>
                        <SelectItem value="cst">Central (CST/CDT)</SelectItem>
                        <SelectItem value="mst">Mountain (MST/MDT)</SelectItem>
                        <SelectItem value="pst">Pacific (PST/PDT)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Additional Information */}
              <section className="space-y-4">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-3/20 to-chart-3/10 flex items-center justify-center shadow-sm">
                    <Briefcase className="w-5 h-5 text-chart-3" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Información Adicional</h3>
                    <p className="text-xs text-muted-foreground">Detalles complementarios</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type" className="text-sm font-medium">
                      Tipo de Cita
                    </Label>
                    <Input
                      id="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Ej: Medical, Dental"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lep" className="text-sm font-medium">
                      LEP
                    </Label>
                    <Input
                      id="lep"
                      value={formData.lep}
                      onChange={(e) => setFormData({ ...formData, lep: e.target.value })}
                      className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
                      placeholder="Nombre del LEP"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="intakeDate" className="text-sm font-medium">
                      Fecha de Admisión
                    </Label>
                    <Input
                      id="intakeDate"
                      type="date"
                      value={formData.intakeDate}
                      onChange={(e) => setFormData({ ...formData, intakeDate: e.target.value })}
                      className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="intakeTime" className="text-sm font-medium">
                      Hora de Admisión
                    </Label>
                    <Input
                      id="intakeTime"
                      type="time"
                      value={formData.intakeTime}
                      onChange={(e) => setFormData({ ...formData, intakeTime: e.target.value })}
                      className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </section>
            </div>
          </ScrollArea>

          {/* Activity Sidebar */}
          <div className="border-l bg-gradient-to-b from-muted/30 to-muted/10 flex flex-col">
            <div className="p-6 border-b bg-gradient-to-r from-muted/50 to-muted/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-4/20 to-chart-4/10 flex items-center justify-center shadow-sm">
                  <MessageSquare className="w-5 h-5 text-chart-4" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Actividad y Comentarios</h3>
                  <p className="text-xs text-muted-foreground">Historial de cambios</p>
                </div>
              </div>
            </div>

            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {/* Comment Input */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-10 h-10 border-2 border-primary shadow-sm">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-sm font-bold">
                        MG
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Escribe un comentario... Usa @ para mencionar"
                        className="min-h-[100px] resize-none transition-all focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <Button className="w-full shadow-sm" size="sm" disabled={!comment.trim()} onClick={handleAddComment}>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Agregar Comentario
                  </Button>
                </div>

                <Separator />

                {/* Empty State */}
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-muted to-muted/50 mx-auto flex items-center justify-center shadow-sm">
                    <MessageSquare className="w-10 h-10 text-muted-foreground/50" />
                  </div>
                  <div className="space-y-2 px-4">
                    <p className="font-semibold text-sm text-foreground">No hay actualizaciones</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Sé el primero en actualizar sobre el progreso o mencionar cambios importantes en esta asignación
                    </p>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-8 py-5 border-t bg-gradient-to-r from-muted/30 via-muted/20 to-transparent">
          <div className="flex items-center gap-3">
            <div className="text-sm text-muted-foreground">
              Última modificación: <span className="font-medium text-foreground">hace 2 horas</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSaving}
              className="min-w-[100px] shadow-sm"
            >
              <X className="w-4 h-4 mr-2" />
              Cancelar
            </Button>
            <Button onClick={handleSave} disabled={isSaving} className="min-w-[140px] shadow-sm">
              {isSaving ? (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Guardando...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Guardar Cambios
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

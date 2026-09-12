# Fundación Latidos — Resumen de Requerimientos y Análisis de Datos

**Para:** Edgar Rojas  
**De:** Jake (Heartitude)  
**Fecha:** Septiembre 2026

---

Hola Edgar,

Basándome en lo que nos comentaste sobre las necesidades de la plataforma, quise organizar todo y confirmar contigo que estamos en la misma página.

Además, analizamos los 4 archivos Excel que nos compartiste — y encontramos cosas muy interesantes que te quiero mostrar.

---

## 1. Lo que entendimos de tus requerimientos

### Categorías de asistencia

Entendimos que necesitas que cada ayuda que Latidos da a un niño se clasifique en una de estas 6 categorías:

| # | Categoría | Ejemplo |
|:--|:---|:---|
| 1 | **Medicamentos** | Medicinas post-operatorias |
| 2 | **Exámenes Médicos** | Ecocardiogramas, análisis |
| 3 | **Transporte** | Pasaje de provincia a la capital |
| 4 | **Alojamiento** | Estadía cerca del hospital |
| 5 | **Insumos Médicos** | Materiales de curación |
| 6 | **Equipos Médicos** | Succionadores portátiles |

Y **aparte** de estas 6, los insumos básicos que se entregan regularmente:
- Pañales (Pampers)
- Toallitas
- Leche especial

### "Cumple con Causa" (CCC)

Entendimos que cada campaña CCC necesita registrar:
- **Nombre del paciente** (el niño beneficiado)
- **Nombre del organizador** (la persona que celebra su cumpleaños)
- **Monto recaudado**
- **Tipo de asistencia proporcionada** (de las 6 categorías)

### Casos nuevos vs. seguimiento

Cada niño debe estar clasificado como **caso nuevo** o **caso de seguimiento**.

---

## 2. Lo que encontramos en tus archivos Excel

Analizamos cada celda de los 4 archivos. Aquí te presentamos los números reales:

### Cuadro de Niños Realizados CCC

| Dato | Valor |
|:---|:---|
| Total de registros (No. 1–53) | 53 |
| Entradas que no son pacientes | 4 (programa contable, 2 giras médicas, 1 cancelado) |
| **Pacientes únicos atendidos** | **~40** |
| Total facturado | **$79,812.13** |
| Descuento 15% (convenio hospital) | $9,123.19 |
| Total entregado a familias | **$68,292.43** |

**Pacientes con intervenciones múltiples:**
- Abraham Jimenez — 4 intervenciones, **$26,856** (el monto más alto)
- Alessa Martinez — 4 intervenciones, $2,531
- Ayla Moreno Campos — 4+ intervenciones, $11,386
- Elvis Martinez — 2 intervenciones
- Uriel Campo/s — 2 intervenciones

### Insumos 2026 (Enero–Septiembre)

| Insumo | Niños (♂) | Niñas (♀) | Total |
|:---|:---:|:---:|:---:|
| Pañales | 57 | 68 | **125** |
| Toallitas | 61 | 70 | **131** |
| Leche Especial | 63 | 77 | **140** |
| **Total entregas** | **181** | **215** | **396** |
| Casos nuevos | 26 | 26 | **52** |

**Distribución mensual:**

| Mes | Pañales | Toallitas | Leche | Total | Nuevos |
|:---|:---:|:---:|:---:|:---:|:---:|
| Enero | 12 | 13 | 13 | 38 | 3 |
| Febrero | 15 | 15 | 15 | 45 | 11 |
| Marzo | 31 | 31 | 32 | 94 | 4 |
| Abril | 21 | 24 | 27 | 72 | 20 |
| Mayo | 7 | 8 | 10 | 25 | 1 |
| Junio | 5 | 5 | 7 | 17 | 7 |
| Julio | 16 | 17 | 18 | 51 | 4 |
| Agosto | 12 | 12 | 12 | 36 | 1 |
| Septiembre | 6 | 6 | 6 | 18 | 1 |

### Caja Menuda (Dic 2025–Sep 2026)

| Dato | Valor |
|:---|:---|
| Fondo fijo | $200.00 |
| Reembolsos realizados | 27 |
| Total de gastos | 179 |
| **Monto total** | **$4,641.52** |

**Distribución por tipo de gasto:**

| Categoría | Cantidad | Monto | % |
|:---|:---:|:---:|:---:|
| **Transporte** | 68 | $1,822 | 39.3% |
| Otros/sin clasificar | 57 | $1,642 | 35.4% |
| Operaciones/oficina | 32 | $606 | 13.1% |
| Medicamentos | 11 | $354 | 7.6% |
| Mensajería | 5 | $96 | 2.1% |
| Eventos | 3 | $62 | 1.3% |
| Alimentación | 3 | $60 | 1.3% |

**Top beneficiarios por frecuencia:**

| # | Acudiente | Veces |
|:--|:---|:---:|
| 1 | Yarisubel Guardia | 8 |
| 2 | Lisandra Martinez | 6 |
| 3 | Yulibeth Martinez | 5 |
| 4 | Edgar Rojas | 5 |

### Niños con Traqueotomía y Encamados

- **12 niños con traqueotomía** (5 con succionador asignado)
- **5 niños encamados** (todos con datos de contacto completos)
- **Total cuidado crítico: 17 niños**

---

## 3. Problemas que encontramos en los archivos

### ⚠️ Error de fórmula en el cuadro CCC

La fórmula `=SUM(G14:G57)` del archivo CCC **no incluye las primeras 10 filas** (No. 1 al 10). Esto hace que el total de "Entregado" aparezca como $62,155 cuando el valor real es **$68,292** — una diferencia de **$6,137** que no aparece en las estadísticas.

### ⚠️ Nombres inconsistentes

Encontramos que el mismo paciente aparece con nombres diferentes en distintos archivos:
- `NAYRA MENA` ↔ `MAYRA MENA` ↔ `NAYRA MENA RODRIGUEZ`
- `AYLA MORENO CAMPOS` ↔ `AYLA MORENO.` ↔ `AYLA MORENO Y RAUL SOTO`
- `URIEL CAMPO` ↔ `URIEL CAMPOS`

Esto hace imposible rastrear automáticamente a un paciente entre archivos.

### ⚠️ Datos fragmentados

Para saber todo sobre un paciente (ej: Alessa Martinez), hay que buscar en los 4 archivos por separado:

| Archivo | Información de Alessa |
|:---|:---|
| CCC | 4 cirugías, $2,530.55 |
| Traqueo | Traqueotomía, succionador portátil |
| Insumo | Lista 20 de septiembre, madre: Mayra Mena |
| Caja | Madre recibió transporte 4+ veces |

Con la plataforma, toda esta información estaría **en una sola pantalla**.

---

## 4. Preguntas para confirmar

Edgar, necesito tu confirmación en estos puntos:

1. **¿Las 6 categorías de asistencia son correctas y completas?** ¿Falta alguna?

2. **¿Cada gasto de la Caja Menuda debe clasificarse en una de las 6 categorías?** ¿O la Caja tiene sus propias categorías?

3. **¿Los "Insumos Básicos" (pañales, toallitas, leche) se registran solo por cantidad, o también necesitas registrar el costo?**

4. **¿Hay datos adicionales que necesitas rastrear por paciente?** (Ej: diagnóstico, médico tratante, hospital, fechas de seguimiento)

5. **¿La información de las columnas ocultas del archivo de Insumos (cartas al gobierno, cirugías por hospital, donaciones en la Casita) también debe estar en la plataforma?**

---

Cualquier duda me escribes. 🤝

*— Jake (Heartitude)*

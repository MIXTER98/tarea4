import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';


@Component({
  imports: [MatToolbar, MatButtonModule],
  selector: 'app-header',
  styles: ``,
  template: ` 
    <div class="min-h-screen bg-[#F7F5EF] text-zinc-900 flex flex-col justify-between p-6 relative overflow-hidden">
      
      <!-- Grid de guía de fondo (opcional para simular las líneas de diseño) -->
      <div class="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-20">
        <div class="border-r border-dashed border-zinc-400"></div>
        <div class="border-r border-dashed border-zinc-400"></div>
        <div class="border-r border-dashed border-zinc-400"></div>
        <div></div>
      </div>

      <!-- Header -->
      <header class="flex justify-between items-center z-10">
        <div class="text-xl font-bold tracking-tight">Pulmify</div>
        <nav class="hidden md:flex gap-6 text-sm uppercase tracking-wider text-zinc-700">
          <span class="border border-dashed border-zinc-400 px-3 py-1">Technology</span>
          <span class="border border-dashed border-zinc-400 px-3 py-1">Platform</span>
          <span class="border border-dashed border-zinc-400 px-3 py-1">Clinical Data</span>
          <span class="border border-dashed border-zinc-400 px-3 py-1">Request a Demo</span>
        </nav>
        <button mat-flat-button class="!bg-[#2C4A27] !text-white px-6 py-2 uppercase text-xs tracking-wider">
          Request a Demo
        </button>
      </header>

      <!-- Main Content / Hero -->
      <main class="my-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center z-10 relative max-w-6xl mx-auto w-full">
        
        <!-- Elementos Izquierdos -->
        <div class="flex flex-col gap-6">
          <div class="border border-dashed border-zinc-500 p-3 text-center text-xs uppercase tracking-widest bg-[#F2F0E9]">
            Biomarkers
          </div>
          <div class="h-8 w-px bg-zinc-400 border-dashed mx-auto"></div>
          <div class="border border-dashed border-zinc-500 p-3 text-center text-xs uppercase tracking-widest bg-[#F2F0E9]">
            Patient Overview
          </div>
        </div>

        <!-- Título Central y Caja de IA -->
        <div class="flex flex-col items-center text-center gap-12">
          <h1 class="text-4xl md:text-5xl font-normal tracking-tight max-w-md">
            From Complex Data to Clear Decisions
          </h1>
          <div class="border border-dashed border-zinc-500 p-6 bg-[#EBE8DE] text-sm uppercase tracking-widest">
            AI
          </div>
        </div>

        <!-- Elementos Derechos -->
        <div class="flex flex-col gap-6">
          <div class="border border-dashed border-zinc-500 p-3 text-center text-xs uppercase tracking-widest bg-[#F2F0E9]">
            Risk Assessment
          </div>
          <div class="border border-dashed border-zinc-500 p-3 text-center text-xs uppercase tracking-widest bg-[#F2F0E9]">
            Data Visualization
          </div>
        </div>

      </main>

      <!-- Bottom Visualizations / Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 max-w-6xl mx-auto w-full mt-8">
        
        <!-- Analysis Grid Card -->
        <div class="border border-dashed border-zinc-500 bg-[#F2F0E9] p-4">
          <div class="text-xs uppercase tracking-widest mb-3 text-zinc-600">Analysis</div>
          <div class="grid grid-cols-20 gap-1 h-32 bg-[#E3E0D5] p-2 border border-dashed border-zinc-400">
            <!-- Simulación de celdas de matriz -->
            <div *For="let i of [1,2,3,4,5,6,7,8]" class="bg-[#557A46] opacity-75 h-full"></div>
            <div class="bg-[#334E2F] h-full"></div>
            <div class="bg-[#9AB08F] h-full"></div>
          </div>
        </div>

        <!-- Predictive Risk Signal Card -->
        <div class="border border-dashed border-zinc-500 bg-[#F2F0E9] p-4">
          <div class="text-xs uppercase tracking-widest mb-3 text-zinc-600">Predictive Risk Signal</div>
          <div class="h-32 bg-[#D4E2CD] border border-dashed border-zinc-400 relative flex items-end p-2 gap-1">
            <!-- Simulación de gráfico de barras con burbujas -->
            <div class="w-4 bg-white border border-zinc-400 rounded-t h-16"></div>
            <div class="w-4 bg-white border border-zinc-400 rounded-t h-28"></div>
            <div class="w-4 bg-white border border-zinc-400 rounded-t h-10"></div>
          </div>
        </div>

      </div>

    </div>
  `,
})
export class Header {}

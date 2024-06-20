import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-10">Vanliga frågor</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Vad är TenFAST fastighetssystem?</AccordionTrigger>
            <AccordionContent>TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Är TenFAST webbaserat?</AccordionTrigger>
            <AccordionContent>Ja, TenFAST är byggt för webben och kräver ingen installation.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Vad kostar systemet?</AccordionTrigger>
            <AccordionContent>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Funkar fastighetssystemet på mobilen?</AccordionTrigger>
            <AccordionContent>Ja, du kan använda TenFAST på både dator och mobil.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Hur kan fastighetssystemet vara så billigt?</AccordionTrigger>
            <AccordionContent>TenFAST är byggt för att vara kostnadseffektivt och skalbart.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Varför kan jag använda det gratis?</AccordionTrigger>
            <AccordionContent>TenFAST är gratis för mindre hyresvärdar med upp till 5 hyresobjekt.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Vad räknas som ett hyresobjekt?</AccordionTrigger>
            <AccordionContent>Ett hyresobjekt är en enskild bostad eller lokal som hyrs ut.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Vilka funktioner finns i fastighetsprogrammet?</AccordionTrigger>
            <AccordionContent>TenFAST erbjuder en mängd funktioner för att hantera hyresavtal, betalningar, bokföring, och mycket mer.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Kan jag skapa hyresavtal och signera digitalt?</AccordionTrigger>
            <AccordionContent>Ja, du kan skapa och signera hyresavtal digitalt med BankID.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Kan hyresgästen använda det?</AccordionTrigger>
            <AccordionContent>Ja, hyresgästen har en egen inloggning där de kan se sina avtal och betalningar.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>Indexjustering av hyra</AccordionTrigger>
            <AccordionContent>TenFAST stödjer automatisk indexjustering av hyror.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>Hur gör jag med mina befintliga hyresavtal?</AccordionTrigger>
            <AccordionContent>Du kan enkelt importera dina befintliga hyresavtal till TenFAST.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger>Kan jag få hjälp att komma i gång?</AccordionTrigger>
            <AccordionContent>Ja, vi erbjuder support och utbildning för att hjälpa dig komma igång med TenFAST.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
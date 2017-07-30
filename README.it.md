
# Facebook Review Courusel
> Facebook review utilizzando Boostrap carousel

[![Html][swift-image]][swift-url]
[![Boostrap]
[![javascipt][license-image]][license-url]
[![Jquery][swift-image]][swift-url]

Other language: [English](README.md), [Italiano](README.it.md)

## Table of Contents
- [Installing / Getting started](## Installing / Getting started)
    - [Primo Metodo - Firefox](### Primo Metodo - Firefox)

## Installing / Getting started

Ciao a tutti per farlo funzionare ci sono alcune cose da fare, vi mostrerò alcuni metodi per vedere il funzionamento del servizio perchò ho viene usato il json per chiamare dei dati di esempio e utilizzando vari 

### Primo Metodo - Firefox

ebbene si questo è il metodo più semplice XD

### Utilizzare un piccolo server locale

potete procedere in due modi:

* server Lampp

mettete la cartella del progetto nella cartella htdocs e collegatevi alla pagina

```
http://localhost/Facebook-Review-master
```

per mantenere la cartella htdocs più pulita suggerisco di creare una cartella projects dove mettere tutti i vostri progetti

```
http://localhost/projects/Facebook-Review-master
```

* server Python 

aprite il terminale, spostatevi nella cartella del progetto e digitate per python 2.x

```code-block
py -m http.server [portNumber]
```
per python 3.x

```code-block
py -m http.server [portNumber]
```
basterà poi accedere dal browser alla pagina

```code-block
http://localhost:[portNumber]
```
### utilizzare delle estensioni su chrome

su chrome esiste un'estenione chiamata web server for chrome che può fare a caso vostro


## Configuration

Se va tutto bene potrete finalmente fare le vostre modifiche per mostrare le recensioni della vostra pagina.

Per portare a termine l'operazione dovrete avere

* Account da sviluppare di facebook 
* Essere amministratori della pagina

#### Argument 1
Type: `String`  
Default: `'default value'`

State what an argument does and how you can use it. If needed, you can provide
an example below.

Example:
```bash
awesome-project "Some other value"  # Prints "You're nailing this readme!"
```

#### Argument 2
Type: `Number|Boolean`  
Default: 100

Copy-paste as many of these as you need.

## Contributing

When you publish something open source, one of the greatest motivations is that
anyone can just jump in and start contributing to your project.

These paragraphs are meant to welcome those kind souls to feel that they are
needed. You should state something like:

"If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome."

If there's anything else the developer needs to know (e.g. the code style
guide), you should link it here. If there's a lot of things to take into
consideration, it is common to separate this section to its own file called
`CONTRIBUTING.md` (or similar). If so, you should say that it exists here.

## Licensing

One really important part: Give your project a proper license. Here you should
state what the license is and how to find the text version of the license.
Something like:

"The code in this project is licensed under MIT license."

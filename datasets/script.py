import csv
import json
import ast

def string_to_list(string):
    string = string.replace('[', '').replace(']', '')
    string = string.split(',')
    return [item.strip().strip("'\"") for item in string]


# Abrir os arquivos com a codificação UTF-8
with open('dataset.json', 'r+', encoding='utf-8') as jsonfile:

    data = json.load(jsonfile)
    
    for book in data: 
        book['_id'] = book.pop('bookId')
        book['title'] = book.pop('title')
        book['series'] = book.pop('series')
        book['author'] = string_to_list(book.pop('author'))
        book['rating'] = book.pop('rating')
        book['description'] = book.pop('description')
        book['language'] = book.pop('language')
        book['isbn'] = book.pop('isbn')
        book['genres'] = string_to_list(book.pop('genres'))
        book['characters'] = string_to_list(book.pop('characters'))
        book['bookFormat'] = book.pop('bookFormat')
        book['edition'] = book.pop('edition')
        book['pages'] = book.pop('pages')
        book['publisher'] = book.pop('publisher')
        book['publishDate'] = book.pop('publishDate')
        book['firstPublishDate'] = book.pop('firstPublishDate')
        book['awards'] = string_to_list(book.pop('awards'))
        book['numRatings'] = book.pop('numRatings')
        book['ratingsByStars'] = string_to_list(book.pop('ratingsByStars'))
        book['likedPercent'] = book.pop('likedPercent')
        book['setting'] = string_to_list(book.pop('setting'))
        book['coverImg'] = book.pop('coverImg')
        book['bbeScore'] = book.pop('bbeScore')
        book['bbeVotes'] = book.pop('bbeVotes')
        book['price'] = book.pop('price')
        

    jsonfile.seek(0)

    json.dump(data, jsonfile, ensure_ascii=False, indent=4)

    jsonfile.truncate()

<?php

class Field_short extends Illuminate\Database\Eloquent\Model {

    /**
     *
     * @var type 
     */
    protected $table = "content_entry_field_short";

    /**
     * 
     * @return type
     */
    public function fieldByMorph() {
        return $this->morphOne('Field', 'valuable');
    }

    /**
     * 
     * @return type
     */
    public function field() {
        return $this->belongsTo('Field', 'content_entry_field_id');
    }

}
